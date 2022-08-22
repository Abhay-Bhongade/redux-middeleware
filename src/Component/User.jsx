import React from 'react'

const User = ({user}) => {
    console.log(user);
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((ele)=>{
                        return (
                            <>
                            <tr key={ele.id}>
                                <td>{ele.username}</td>
                                <td>{ele.email}</td>
                                <td>{ele.website}</td>
                            </tr>
                            </>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default User