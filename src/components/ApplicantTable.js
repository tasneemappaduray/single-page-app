import React, { useState, useEffect } from 'react';
import '../styles/ApplicantTable.css'
import ApplicantRow from './ApplicantRow'
import Search from './Search';

const ApplicantTable = () => {

    const [applicants, setApplicants] = useState([])
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        const fetchApplicants = async () => {
          setStatus('loading');
          try {
            const response = await fetch(
              'https://gist.githubusercontent.com/EthanMarrs/8a5c090fe3787cff0f4f044d0dc35278/raw/751c0b21a6648dfe6b99e1924c0068ee2b7fac70/interviewRequests.json'
            );
            const data = await response.json();
            setApplicants(data);
            setStatus('succeeded');
          } catch (error) {
            console.error("Error fetching candidates:", error);
            setStatus('failed');
          }
        };
    
        fetchApplicants();
      }, []);
     
    const filterApplicants = applicants.filter((applicant) => applicant.candidate ? applicant.candidate.toLowerCase().includes(search.toLowerCase()) : false)
    const handleSearchChange = (term) => {
        setSearch(term);
      };

    return(

        <div className="applicant-table">
        <div className="table-header">
          <span><Search searchTerm={search} onSearchChange={handleSearchChange} /></span>
        </div>
        <div className="applicant-counter">
            {filterApplicants.length} interview request{filterApplicants.length !== 1 ? 's' : ''}
        </div>
  
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error loading candidates data.</p>}
  
        {status === 'succeeded' && (
          <table>
            <thead>
              <tr>
                <th>Candidate</th>
                <th>Role</th>
                <th>Last communication</th>
                <th>Salary</th>
                <th>Sent by</th>
              </tr>
            </thead>
            <tbody>
              {filterApplicants.map((applicant, index) => (
                <ApplicantRow key={index} {...applicant} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    )
}
export default ApplicantTable;