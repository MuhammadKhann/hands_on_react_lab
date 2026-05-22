import React from 'react';
import { useProjects } from './projectHooks';
import ProjectList from './ProjectList';

function ProjectsPage() {
  const {
    data,
    isPending,
    error,
    isError,
    isFetching,
    page,
    setPage,
    isPreviousData,
  } = useProjects();

  return (
    <>
      <h1>Projects</h1>

      {data ? (
        <>
          {isFetching && !isPending && (
            <span className="toast">Refreshing...</span>
          )}
          <ProjectList projects={data} />
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', margin: '20px 0' }}>
            <div className="col-sm-12 col-md-5" style={{ textAlign: 'center', marginBottom: '10px' }}>Current page: {page + 1}</div>
            <div className="col-sm-12 col-md-6">
              <div className="button-group" style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  className="button "
                  onClick={() => setPage((oldPage) => oldPage - 1)}
                  disabled={page === 0}
                >
                  Previous
                </button>
                <button
                  className="button"
                  onClick={() => {
                    if (!isPreviousData) {
                      setPage((oldPage) => oldPage + 1);
                    }
                  }}
                  disabled={data.length != 10}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      ) : isPending ? (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      ) : isError && error instanceof Error ? (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error.message}
              </p>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProjectsPage;