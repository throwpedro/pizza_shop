import CenterContent from "../components/CenterContent";
import TopBar from "../components/topbar/TopBar";

function Profile() {
    return (
        <>
            <TopBar routeName="Profile" />
            <CenterContent>
                <div>
                    <h1>Profile</h1>
                </div>
            </CenterContent>
        </>
    )
}

export default Profile;