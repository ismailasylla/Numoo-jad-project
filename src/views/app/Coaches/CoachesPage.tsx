import React, {useState} from 'react';
import { Container, FilterInputWrapper, CoachesWrapper, CoachesBoxLeft, CoachesBoxRight, CategorySelect, CategoryOption, CategoryText, CoachesPagination, LocationSearch } from "./CoachesPage.styled";
import { MainHeading, SubHeading, LabelHeading, CardCoach, ButtonDropdown } from '../../../components';
import data from '../../../dummy/coaches';
import { dropdowns } from '../../../constants';

function Coaches(props: any): JSX.Element {
  //Preferences Logic
  function onSearch(e: any) {
    console.log('onSearch item', e);
  }
  function handleCategory(e: any) {
    console.log('handleCategory item', e);
  }
  function handleExperience(e: any) {
    console.log('handleExperience item', e);
  }
  function handleLanguage(e: any) {
    console.log('handleLanguage item', e);
  }
  function handleGender(e: any) {
    console.log('handleGender item', e);
  }
  function handleBudget(e: any) {
    console.log('handleBudget item', e);
  }

  //Pagination
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
              onChange={handleCategory}
              style={{width: '100%'}}>

              {dropdowns.categories.map((item, key) => 
                <CategoryOption key={key} value={item}><CategoryText>{item}</CategoryText></CategoryOption>
              )}
            </CategorySelect>
          </FilterInputWrapper>
          
          <FilterInputWrapper>
            <LabelHeading isGreyed="true" title={"Experience"} />
            <ButtonDropdown items={dropdowns.experience} label="Any" parentCallback={handleExperience}></ButtonDropdown>
          </FilterInputWrapper>

          <FilterInputWrapper>
            <LabelHeading isGreyed="true" title={"Language"} />
            <ButtonDropdown items={dropdowns.language} label="Any" parentCallback={handleLanguage}></ButtonDropdown>
          </FilterInputWrapper>

          <FilterInputWrapper>
            <LabelHeading isGreyed="true" title={"Location"} />
            <LocationSearch placeholder="Search location" size="large" onSearch={onSearch} />
          </FilterInputWrapper>

          <FilterInputWrapper>
            <LabelHeading isGreyed="true" title={"Gender"} />
            <ButtonDropdown items={dropdowns.genders} label="Any" parentCallback={handleGender}></ButtonDropdown>
          </FilterInputWrapper>

          <FilterInputWrapper>
            <LabelHeading isGreyed="true" title={"Budget"} />
            <ButtonDropdown items={dropdowns.budget} label="Any" parentCallback={handleBudget}></ButtonDropdown>
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
    <CoachesPagination defaultCurrent={1} defaultPageSize={pageSize} total={data.length} onChange={handlePageChange}/>
  </Container>
  )
}

export default Coaches;