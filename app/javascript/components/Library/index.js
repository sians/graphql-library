import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { LibraryQuery } from './operations.graphql';
import gql from 'graphql-tag';


const Library = () => {
  const [item, setItem] = useState(null);

  return (
    <Query query={LibraryQuery}>
      {({ data, loading }) => (
        <div>
        { console.log(!data) }
          { loading || !data
            ? "Loading"
            : data.items.map(({ title, id, description, imageUrl, user }) => (
              <button
                key={id}
                className="btn"
                onClick={() => setItem({ title, imageUrl, id, description})}
              >
                <div className="title">{title}</div>
                <div>{description}</div>

                {imageUrl && <img src={imageUrl} />}

                {user
                  ? <div>added by {user.email}</div>
                  : null
                }
              </button>
            ))
          }
        </div>
      )}
    </Query>
  )
}

export default Library;

