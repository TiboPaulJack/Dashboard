

export default function Preview() {

    return (

        <div className="containerPreview">
            <div className="containerPreview__image">
                <div className="topImage" />
                    <div className="otherImages">
                        <div className={"image_slot"}></div>
                        <div className={"image_slot"}></div>
                        <div className={"image_slot"}></div>
                        <div className={"image_slot"}></div>
                        <div className={"image_slot"}></div>
                        <div className={"image_slot"}></div>
                        <div className={"image_slot"}></div>
                        <div className={"image_slot"}></div>
                        <div className={"image_slot"}></div>
                    </div>
              </div>
            <form className={"inputImage"}>
                <input type="file" id="file" accept="image/*" />
            </form>
        </div>
    );
}
