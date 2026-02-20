import exec from "../assets/board-group-photos/exec.png"
import externals from "../assets/board-group-photos/externals.jpg"
import internals from "../assets/board-group-photos/internals.jpg"
import commms from "../assets/board-group-photos/comms.jpg"
import finance from "../assets/board-group-photos/finance.jpg"
import outreach from "../assets/board-group-photos/studentoutreach.png"



interface BoardCommittee {
  title: string;
  photoURL: string;
}


const boardGroupPhotos: BoardCommittee[] = [
    {
        title : "Executive",
        photoURL : exec
    },
    {
        title : "Externals",
        photoURL : externals
    },
    {
        title : "Internal",
        photoURL : internals
    },
    {
        title : "Communications",
        photoURL : commms
    },
    {
        title : "Finance",
        photoURL : finance
    },
    {
        title: "Student Outreach",
        photoURL : outreach
    },
    {
        title : "PeterWorks",
        photoURL : ""
    }
];

export default boardGroupPhotos;