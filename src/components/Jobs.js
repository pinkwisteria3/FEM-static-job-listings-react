import { useState, useEffect } from 'react';
import data from '../data.json';
import JobComponent from './JobComponent';
import styled from 'styled-components';
import AOS from 'aos';

const Container = styled.div`
    width:86.97vw;
    margin:0 auto;
    padding-top:3.75rem;
    display:flex;
    flex-direction:column;
    gap:2.5625rem; 
    @media (min-width: 68.75rem){
        gap:1.5rem;
        padding-top:4.75rem;
    }
`
const FilterDiv = styled.div`
    background:#fff;
    padding:0.9375rem 1.1875rem;
    box-shadow:2px 3px 3px 2px rgba(0,0,0,0.1);
    border-radius:6px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:-100px;
    @media(min-width:1100px){
       
    justify-content:space-between;
    align-items:center; 
    padding: 2rem 2.1875rem;
    width:68.75rem;
    margin-left:auto;
    margin-right:auto;
}
`
const Filters =styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:10px;
`
const Span = styled.span`
    color:#5CA5A5;
    background:hsl(180, 31%, 95%);
    font-size:0.8125rem;
    font-weight:700;
    line-height:1.5rem;
    letter-spacing:-0.1px;
    padding:5px 8px;
`
const ClearSpan = styled.span`
    color:#7C8F8F;
    background:#fff;
    font-size:0.8125rem;
    font-weight:700;
    line-height:1.5rem;
    letter-spacing:-0.1px;
    padding:0.3125rem 0.5rem;
    &:hover{
        color:#5CA5A5;
        text-decoration:underline;
    }
`
const FilterClear=styled.div`
    color:#FFF;
    background:#5CA5A5;
    font-size:0.8125rem;
    font-weight:700;
    line-height:1.5rem;
    letter-spacing:-0.1px;
    padding:0.3125rem 0.5rem;
    &:hover{
        color:#fff;
        background:#000;
    }
`
const EachFilter= styled.div`
    display:flex;
`
function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [filters,setFilters] = useState([]);
    useEffect(() => {
        setJobs(data)
    }, []);

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

    const filterJobs = ({role,level,tools,languages})=>{
        if(filters.length===0){
            return true;
        }
        const tags = [role,level];
        if(tools){
            tags.push(...tools)
        }
        if(languages){
            tags.push(...languages)
        }
        return filters.every(filter=>tags.includes(filter))
    }

    const filteredJobs = jobs.filter(filterJobs);

    const handleClear = ()=>{
        setFilters([]);
    }

    function handleClick(tag) {
        if (!filters.includes(tag)) {
            setFilters([...filters, tag]);
        }
    }
    function handleFilterClick(filter){
   
        setFilters(filters.filter(val=>val!==filter))
    }
    
    return (
        <Container>
            {filters.length>0 &&
            <FilterDiv>
                <Filters>
                {filters.map((filter,id)=><EachFilter key={id}>
                    <Span>{filter}</Span>
                    <FilterClear onClick={()=>handleFilterClick(filter)}>X</FilterClear>
                    </EachFilter>)}
                </Filters>
                <div><ClearSpan onClick={handleClear}>Clear</ClearSpan></div>
            </FilterDiv>
            }
            {filteredJobs.length===0?(<p>Loading</p>):(
                filteredJobs.map(job=><JobComponent key={job.id} job={job} handleClick={handleClick} data-aos="zoom-in"/> 
                ))}
        </Container>
    )
}

export default Jobs
