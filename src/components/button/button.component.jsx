import {
  BaseButton,
  GradientOneButton,
  GradientTwoButton,
} from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  gradientOne: 'gradient-one',
  gradientTwo: 'gradient-two',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.gradientOne]: GradientOneButton,
    [BUTTON_TYPE_CLASSES.gradientTwo]: GradientTwoButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
