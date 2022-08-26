import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from './DataLayer';
import logo from './spotify.jpg';
function Sidebar() {
    const [{playlists},dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src={logo} alt="" />
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your library" Icon={LibraryMusicIcon}/>
            <br/>
            <strong className="sidebar__playlists">PLAYLISTS</strong>
            <hr/>
             {playlists?.items?.map(playlist => (
                 <SidebarOption title={playlist.name} />
             ))}
            
        </div>
    )
}

export default Sidebar;
