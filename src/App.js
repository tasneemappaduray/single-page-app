import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import ApplicantTable from './components/ApplicantTable';
import Search from './components/Search';

function App() {

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
        console.log('dude', data)
        setApplicants(data);
        setStatus('succeeded');
      } catch (error) {
        console.error("Error fetching candidates:", error);
        setStatus('failed');
      }
    };

    fetchApplicants();
  }, [])

  const filterApplicants = applicants.filter((applicant) => applicant.candidate ? applicant.candidate.toLowerCase().includes(search.toLowerCase()) : false)
  
  const handleSearchChange = (term) => {
      setSearch(term);
    };

  return (
    <div className='content-container'>
        <Header/>
        <Search searchTerm={search} onSearchChange={handleSearchChange} />
          {status === 'loading' && <p>Loading...</p>}
          {status === 'failed' && <p>Error loading candidates data.</p>}
          {status === 'succeeded' && (
            
          <ApplicantTable applicants={filterApplicants} />)}
    </div>
  );
}

export default App;
