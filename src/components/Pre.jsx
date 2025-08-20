function Preloader({ load }) {
  if (!load) return null; // Don't render anything when loading is done

  return <div id="preloader"></div>;
}

export default Preloader;
