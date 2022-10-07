function useRouter() {
  const push = (path) => {
    const url = location.origin + `/${path}`;
    history.pushState(null, null, url);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return { push };
}

export default useRouter;
