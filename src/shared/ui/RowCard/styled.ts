import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  padding: 0 5px 5px 5px;
`
export const Head = styled.div`
  
  width: 20%;
  justify-content: space-between;
  align-self: center;
  padding: 0 5px 5px 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Text = styled.p`
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 5px 5px 5px;
`
