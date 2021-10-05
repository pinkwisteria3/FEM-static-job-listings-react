import styled from 'styled-components';

const JobDiv = styled.div`
    background:#fff;
    padding:0 1.1875rem 0.9375rem;
    box-shadow:2px 3px 3px 2px rgba(0,0,0,0.1);
    border-radius:6px;
    ${({ featured }) => featured &&
        `border-left:5px solid #5CA5A5;`}
    @media(min-width:1100px){
       display:flex;
       align-items:center; 
       padding: 2rem 2.1875rem;
       width:1110px;
       margin-left:auto;
       margin-right:auto;
    }
`
const Logo = styled.img`
    width:3rem;
    height:3rem;
    object-fit:contain;
    margin-top:-1.5rem;
    @media(min-width:1100px){
        margin-top:0;
        width:5.5rem;
        height:5.5rem;
        margin-right:1.5625rem;
    }

`

const Company = styled.h3`
    margin:0.5rem 0;
    font-size:0.8125rem;
    color:#5CA5A5;
    font-weight:700;
    line-height:auto;
    @media (min-width: 1100px){
       font-size:0.875rem; 
       margin:0;
    }
`

const Position = styled.p`
    font-size:0.9375rem;
    color:#2B3939;
    font-weight:700;
    line-height:1.5rem;
    margin-bottom:0;
`
const MiscInfo = styled.p`
    font-size:0.8125rem;
    line-height:1.5rem;
    letter-spacing:-0.1px;
    font-weight:500;
    color:#7c8f8f;
    margin:0;
    padding:0.5rem 0;
`
const Info = styled.div`
    
    padding-bottom:0.5rem;
    border-bottom:1px solid #979797;
    @media (min-width: 1100px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        border-bottom:none;
        padding-bottom:0;   
    }
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

const LangTool = styled.div`
    margin-top:1rem;
    display:flex;
    flex-wrap:wrap;
    gap:1rem;
    border-radius:5px;
    @media (min-width: 1100px) {
        margin-left:auto;
    }
`
const New = styled.span`
 color:#fff;
 font-size:0.6875rem;
 background:#5CA5A5;
 padding:0.4rem 0.6rem;
 border-radius:20px;
 text-transform:uppercase;
 margin-left:1rem;
 margin-right:0.5rem;
`

const Featured = styled.span`
 color:#fff;
 font-size:0.6875rem;
 background:#000;
 padding:0.4rem 0.6rem;
 border-radius:1.25rem;
 text-transform:uppercase;
`
function JobComponent({ job,handleClick }) {
    const { company, logo, isNew, featured, position, role, level, postedAt,
        contract, location, languages, tools } = job
    const tags = [role, level];
    if (languages) {
        languages.forEach(lang => tags.push(lang))
    }
    if (tools) {
        tools.forEach(tool => tags.push(tool))
    }

  
    return (
        <JobDiv featured={featured}>
            <div><Logo src={logo} alt='' /></div>
            <Info>
                <Company>
                    {company}
                    {isNew && (<New>New!</New>)}
                    {featured && (<Featured>Featured</Featured>)}
                </Company>
                <Position>{position}</Position>
                <MiscInfo>{postedAt} &#183; {contract} &#183; {location}</MiscInfo>
            </Info>
            <LangTool>
                {tags ? tags.map((tag, index) => <Span key={index} onClick={()=>handleClick(tag)}>{tag}</Span>) : ''}
            </LangTool>
        </JobDiv>
    )
}

export default JobComponent
