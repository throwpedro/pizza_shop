import CenterContent from "../../components/CenterContent";
import TopBar from "../../components/topbar/TopBar";

function Profile() {
    return (
        <>
            <TopBar routeName="Profile" />
            <CenterContent>
                <div className="profile-container">
                    <div className="profile-info">
                        <img
                            src="https://placekitten.com/150/150"
                            alt="Profile"
                            className="profile-picture"
                        />
                        <div className="profile-details">
                            <p>Name: User Name</p>
                            <p>Email: user@example.com</p>
                            <p>Street Address: 123 Main St, City</p>
                        </div>
                    </div>
                </div>
            </CenterContent>
        </>
    )
}

export default Profile;