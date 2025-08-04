import Home from "../components/Home";
import Contact from "../components/Contact";
import { useState, useEffect, useCallback } from "react";
import { getUsers } from "../controllers/userController";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const MasterPage = () => {
  const [key, setKey] = useState("users");
  const [users, setUsers] = useState([]);
   const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
  }, [dispatch]);
  // console.log(data, loading, error);
  
    useEffect(() => {
      if (!data) return;
    setUsers(data);
  }, [data]);

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Home />
      </Tab>
      <Tab eventKey="users" title="Users">
        <div>
          <h4>User Details</h4>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>City</th>
                </tr>
              </thead>
              {(loading||error) &&<tbody>
                <tr>
                  <td colSpan="5" className="text-center">
                    {loading ? "Loading..." : error ? `Error: ${error}` : ""}
                  </td>
                </tr>
                </tbody>}
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.address?.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <Contact />
      </Tab>
    </Tabs>
  );
};
export default MasterPage;
