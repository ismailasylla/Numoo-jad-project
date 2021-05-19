import React, {useState} from 'react';
import { Card, Input } from "antd";
import { Container, FilterInputWrapper, CoachesWrapper, CoachesBoxLeft, CoachesBoxRight, CategorySelect, CategoryOption, CategoryText, CoachesPagination } from "./CoachesPage.styled";
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
  
 const pageSize = 6;
 const [minValue, setMinValue ] = useState(0);
 const [maxValue, setMaxValue ] = useState(pageSize);

 function handlePageChange(e: any) {
  if (e <= 1) {
    setMinValue(0);
    setMaxValue(pageSize);
  } else {
    setMinValue(maxValue);
    setMaxValue(e * pageSize);
  }
}

  return (
  <Container>
    <MainHeading title={"Our Coaches"} />
    <CoachesWrapper>
      <CoachesBoxLeft>
        
          <SubHeading isGreyed="true" title={"Preferences"} />

          <FilterInputWrapper>
            <LabelHeading isGreyed="true" title={"Coaching Category"} />
            <CategorySelect
              size="large"
              showSearch={false}
              showArrow={true}
              mode="multiple"
              placeholder="Any"
              maxTagCount={5}
              style={{width: '100%'}}>
              <CategoryOption key="1" value="life"><CategoryText>Life</CategoryText></CategoryOption>
              <CategoryOption key="2" value="career"><CategoryText>Career</CategoryText></CategoryOption>
              <CategoryOption key="2" value="executive"><CategoryText>Executive</CategoryText></CategoryOption>
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

      {data && data.length > 0 && data.slice(minValue, maxValue).map((item, key) => 
        <CardCoach
          key={key}
          data={item}
        />
      )}


      </CoachesBoxRight>
    </CoachesWrapper>
    <CoachesPagination defaultCurrent={1} defaultPageSize={pageSize} total={10} onChange={handlePageChange}/>



  </Container>
  )
}

export default Coaches;