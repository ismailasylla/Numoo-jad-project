import React from 'react';
import { Card, Input, Select } from "antd";
import { Container, FilterInputWrapper, CoachesWrapper, CoachesBoxLeft, CoachesBoxRight, CategorySelect, CategoryOption } from "./CoachesPage.styled";
import { MainHeading, SubHeading, LabelHeading, CardCoach, ButtonDropdown } from '../../../components';
import data from '../../../dummy/coaches';


function Coaches(props: any): JSX.Element {
  const { Meta } = Card;
  const { Search } = Input;

  function callback(key: any) {
    // console.log(key);
  }

  //Search Logic
  function onSearch(key: any) {
    // console.log(key);
  }

  //Dropdown Logic
  function handleMenuClick(e: any) {
    console.log('click item', e);
  }
  function handleChange(e: any) {
    console.log('handleChange item', e);
  }

 const dropdownItems = ["All", "Legal","Test"]
  
  return (
  <Container>
    <MainHeading title={"Our Coaches"} />
    <CoachesWrapper>
      <CoachesBoxLeft>
        
          <SubHeading isGreyed="true" title={"Preferences"} />

          <FilterInputWrapper>
            <LabelHeading isGreyed="true" title={"Coaching Category"} />
            <CategorySelect
              mode="multiple"
              placeholder="Please select Columns"
              maxTagCount={5}
              style={{width: '100%'}}>
              <CategoryOption key="1" value="Life">Life</CategoryOption>
              <CategoryOption key="2" value="Career">Career</CategoryOption>
              <CategoryOption key="2" value="Executive">Executive</CategoryOption>
            </CategorySelect>

          </FilterInputWrapper>
          
          <FilterInputWrapper>
            <LabelHeading isGreyed="true" title={"Experience"} />
            <ButtonDropdown items={dropdownItems} label="Any" parentCallback={handleMenuClick}></ButtonDropdown>
          </FilterInputWrapper>

          <FilterInputWrapper>
            <LabelHeading isGreyed="true" title={"Language"} />
            <ButtonDropdown items={dropdownItems} label="Any" parentCallback={handleMenuClick}></ButtonDropdown>
          </FilterInputWrapper>

          <FilterInputWrapper>
            <LabelHeading isGreyed="true" title={"Location"} />
            <Search placeholder="Search location" size="large" onSearch={onSearch} />
          </FilterInputWrapper>

          <FilterInputWrapper>
            <LabelHeading isGreyed="true" title={"Gender"} />
            <ButtonDropdown items={dropdownItems} label="Any" parentCallback={handleMenuClick}></ButtonDropdown>
          </FilterInputWrapper>

          <FilterInputWrapper>
            <LabelHeading isGreyed="true" title={"Budget"} />
            <ButtonDropdown items={dropdownItems} label="Any" parentCallback={handleMenuClick}></ButtonDropdown>
          </FilterInputWrapper>
          
      </CoachesBoxLeft>
      <CoachesBoxRight>
        {data.map((item, key) => 
          <CardCoach
            key={key}
            data={item}
          />
        )}
      </CoachesBoxRight>
    </CoachesWrapper>


  </Container>
  )
}

export default Coaches;