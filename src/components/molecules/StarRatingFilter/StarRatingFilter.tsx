import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilter } from 'redux/slices/filters/filtersSlice';
import Star from 'components/atoms/Star/Star';
import { Wrapper } from './StarRatingFilter.styles';
import { FiltersEnum } from 'redux/slices/filters/filters.types';

const StarRatingFilter = () => {
  const [starsHovered, setStarsHovered] = useState(0);
  const { stars } = useSelector((state: State) => state.filters);

  const dispatch = useDispatch();

  const changeRating = (selectedStars: number) => {
    if (selectedStars === stars)
      dispatch(
        applyFilter({
          filter: FiltersEnum.Stars,
          value: -1,
        })
      );
    else
      dispatch(
        applyFilter({
          filter: FiltersEnum.Stars,
          value: selectedStars,
        })
      );
  };

  const handleMouseEnter = (hoveredValue: number) =>
    setStarsHovered(hoveredValue);

  const handleMouseLeave = () => setStarsHovered(0);

  return (
    <Wrapper>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          value={value}
          isFilled={value <= stars || value <= starsHovered ? true : false}
          handleClick={changeRating}
          handleMouseLeave={handleMouseLeave}
          handleMouseEnter={handleMouseEnter}
        />
      ))}
    </Wrapper>
  );
};

export default StarRatingFilter;
