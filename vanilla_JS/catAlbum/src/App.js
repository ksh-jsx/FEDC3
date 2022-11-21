import { request } from "./api";
import Breadcrumb from "./components/BreadCrumb";
import ImageViewer from "./components/ImageViewer";
import Loading from "./components/Loading";
import Nodes from "./components/Nodes";

export default function App({ $target }) {
  this.state = {
    isLoading: false,
    isRoot: true,
    nodes: [],
    paths: [],
    selectedImageUrl: null,
  };

  const loading = new Loading({
    $target,
    initialState: this.state.isLoading,
  });

  const breadcrumb = new Breadcrumb({
    $target,
    initialState: this.state.paths,
    onClick: async (id) => {
      if (id) {
        const nextPaths = [...this.state.paths];
        const pathIndex = nextPaths.findIndex((path) => path.id === id);

        this.setState({
          ...this.state,
          paths: nextPaths.slice(0, pathIndex + 1),
        });
      } else {
        this.setState({
          ...this.state,
          paths: [],
        });
      }

      await fetchNodes(id);
    },
  });

  const nodes = new Nodes({
    $target,
    initialState: {
      ...this.state,
    },
    onClick: async (node) => {
      if (node.type === "DIRECTORY") {
        await fetchNodes(node.id);
        const nextPaths = [...this.state.paths];

        nextPaths.push(node);
        this.setState({
          ...this.state,
          paths: nextPaths,
        });
      }
      if (node.type === "FILE") {
        this.setState({
          ...this.state,
          selectedImageUrl: `https://kdt-frontend.cat-api.programmers.co.kr/static${node.filePath}`,
        });
      }
    },
    onPrevClick: async () => {
      const nextPaths = [...this.state.paths];
      nextPaths.pop();

      if (nextPaths.length) {
        const nodeId = nextPaths[nextPaths.length - 1].id;

        await fetchNodes(nodeId);
      } else {
        await fetchNodes();
      }

      this.setState({
        ...this.state,
        paths: nextPaths,
      });
    },
  });

  const imageViewer = new ImageViewer({
    $target,
    initialState: this.state.selectedImageUrl,
    onClose: () => {
      this.setState({
        ...this.state,
        selectedImageUrl: null,
      });
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;

    loading.setState(this.state.isLoading);
    breadcrumb.setState(this.state.paths);
    nodes.setState(this.state);
    imageViewer.setState(this.state.selectedImageUrl);
  };

  const fetchNodes = async (id) => {
    this.setState({
      ...this.state,
      isLoading: true,
    });

    const res = await request(id ? `/${id}` : "/");

    this.setState({
      ...this.state,
      nodes: res,
      isRoot: id ? false : true,
      isLoading: false,
    });
  };

  fetchNodes();
}
