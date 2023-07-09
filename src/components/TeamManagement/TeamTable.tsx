// @ts-ignore
import data from "../../../data/users.json";



export default function TeamTable ({ setVisible, visible })  {
    return(
        <div className={visible ? "listing hidden" : "listing"}>
            <h2 className={"section-title"}>Team Management</h2>
            <div className={"list"}>
                <div className={"list-header"}>
                    <div className={"list-col-name"}>Name</div>
                    <div className={"list-col"}>Role</div>
                    <div className={"list-col"}>Status</div>
                    <div className={"list-col"}>Actions</div>
                </div>
                <div className={"member-list"}>{data.map((user, index) => {
                    return (
                        <div className={"list-row"} key={index}>
                            <div className={"list-col-name"}>{user.name}</div>
                            <div className={"list-col"}>{user.role}</div>
                            <div className={"list-col"}>{user.status}
                                <div className="status-switch-wrapper">
                                    <label className="member-switch">
                                        <input type="checkbox" id="memberCheckbox"/>
                                        <div className="statusSlider round"></div>
                                    </label>
                                </div>
                            </div>
                            <div className={"list-col"}>
                                <button className={"btn btn-edit"} onClick={() => setVisible(true)}>Edit</button>
                            </div>
                        </div>
                    );
                })}</div>
            </div>
        </div>
    );
};
