import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/justin-bieber-gettyimages-1202421980.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Justin Bieber</span>
            <span className="widgetSmUserTitle">American Musician</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://www.mykhel.com/thumb/220x100x220/cricket/players/8/3788.1666934063.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Virat Kohli</span>
            <span className="widgetSmUserTitle">Indian Cricketer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://flxt.tmsimg.com/assets/516020_v9_bc.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Taylor Swift</span>
            <span className="widgetSmUserTitle">Singer-Songwriter</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media.licdn.com/dms/image/C5603AQFIGlMnMVBkMA/profile-displayphoto-shrink_800_800/0/1517400052957?e=2147483647&v=beta&t=79DVLZAoRTgYhDwlF0dopyWAj_XHO-bH9vKcfThhCeg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Oprah Winfrey</span>
            <span className="widgetSmUserTitle">Television personality</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/59/Robin_Williams_Happy_Feet_premiere.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Robin Williams</span>
            <span className="widgetSmUserTitle">American Comedian</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
