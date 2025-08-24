# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# reactoutput-todolist-v1
# reactoutput-todolist-v2-custom_hook

・useEffectとカスタムフック
useEffect:コンポーネント描画後に実行される処理を定義するためのフック　※effectは副作用

useEffect(() => {
  // 実行したい処理
  console.log("コンポーネントが表示された");
  
  return () => {
    // クリーンアップ処理（アンマウント時などに実行）
    console.log("コンポーネントが消えた");
  };
}, [依存する値]);
    第一引数は実行する処理
    第二引数は依存配列

カスタムフック：

# reactoutput-todolist-v4-context_api
