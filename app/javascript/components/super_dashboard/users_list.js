import React from "react";
import PropTypes from "prop-types";

const UsersList = (props) => {
  let { users } = props;

  return (
    <div className="card h-100 py-2 my-5">
    <div className="card-body">
    <table className="table table-sm table-borderless">
      <thead className="thead-light">
        <tr>
          <th className="col-md-2 text-center" scope="col">#</th>
          <th className="text-center" scope="col">User</th>
          <th className="text-center" scope="col">Created At</th>
          <th className="text-center" scope="col">Restaurants</th>
          <th className="text-center" scope="col">Orders</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <>
              <tr key={user.id}>
                <td className="text-center" rowSpan={user.restaurants.length || 1} scope="row">
                  {user.id}
                </td>
                <td className="text-center" rowSpan={user.restaurants.length || 1}>{user.email}</td>
                <td className="text-center" rowSpan={user.restaurants.length || 1}>{user.created_at}</td>
                <td className="text-center">{user.restaurants[0]?.name}</td>
                <td className="text-center">{user.restaurants[0]?.order_count}</td>
              </tr>
              {user.restaurants
                .slice(1, user.restaurants.length)
                .map((restaurant, index) => {
                  return (
                    <tr className="text-center" key={`${user.id}_${index}`}>
                      <td> {restaurant.name} </td>
                      <td> {restaurant.order_count} </td>
                    </tr>
                  );
                })}
            </>
          );
        })}
      </tbody>
    </table>
    </div>
    </div>
  );
};

export default UsersList;
