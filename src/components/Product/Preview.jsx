function Preview() {
  return (
    <div className="containerPreview">

      <div className="containerPreview__image">
        <div className="topImage"/>
        <div className="otherImages">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/*// input for images*/}
      <form className={"inputImage"}>
        <input type="file" id="file" accept="image/*" />
      </form>
    </div>
  );
}


export default Preview;
