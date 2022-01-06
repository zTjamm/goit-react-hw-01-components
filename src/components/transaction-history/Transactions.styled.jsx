import styled from '@emotion/styled';
export const Table = styled.table`
font-size: 15px;
width: 500px;
margin: 0 auto 100px;
`
export const TableHead = styled.thead`
background-color: #00AAFF;
`
export const TableHeadList = styled.tr`
color: #FFFFFF;
`
export const TableHeadItem = styled.th`
padding: 10px;
border: 1px solid black;
`
export const TableBody= styled.tbody`
text-align: center;
text-transform: uppercase;
`
export const TableBodyList = styled.tr`
:nth-child(2n) {
    background-color: #AABBFF;
    }
`
export const TableBodyItem = styled.td`
border: 1px solid black;
padding: 3px;
`