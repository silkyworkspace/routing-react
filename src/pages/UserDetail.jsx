// src/pages/UserDetail.jsx
import { useParams } from "react-router-dom";
import { usersLists } from "./usersList.js";

export default function UserDetail() {
    // const users = {
    //     1: { name: "山田" },
    //     2: { name: "佐藤" },
    // };

    // useParams() は、ルートの :id 部分をオブジェクトで返す。
    // 例：/users/1 なら、{ id: "1" }を返す
    const { id } = useParams();

    // これは URL から取れた id をキーとして users オブジェクトから該当ユーザーを取り出しているということ。
    // URL が /users/1 → users["1"] → { name: "山田" }
    // URL が /users/2 → users["2"] → { name: "佐藤" }
    const user = usersLists[id];

    return (
        <div>
            <h1>User Detail</h1>
            <p>ユーザーID: {user.name}</p>
        </div>
    );
}