import { Box, SvgIcon } from "@mui/material";

interface LogoProps {
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

const Logo = ({ fill, size, width, height }: LogoProps) => {
  return (
    <SvgIcon
      color="primary"
      viewBox="0 0 56.15 41.59"
      fontSize="large"
      width={width}
      height={height}
      sx={{ fontSize: size, color: fill }}
    >
      <path d="M51.24,39.19a6,6,0,0,1-1.1-3.94V27.19h0A4.77,4.77,0,0,0,50,26.14a5.81,5.81,0,0,0-.87-1.72,8.81,8.81,0,0,0-2.17-2.18A8.62,8.62,0,0,0,44,20.93a9.24,9.24,0,0,0-2.76-.26,7,7,0,0,1-3.62-2.13,6,6,0,0,1-1.1-3.94v-8h0a3.84,3.84,0,0,0-.16-1.06,5.81,5.81,0,0,0-.87-1.72,8.81,8.81,0,0,0-2.17-2.18A8.53,8.53,0,0,0,30.42.28,9.56,9.56,0,0,0,27.19.05,7.42,7.42,0,0,1,32.11,2.4,6,6,0,0,1,33.2,6.34V14.4h0a4,4,0,0,0,.16,1.06,6,6,0,0,0,.86,1.71,9,9,0,0,0,2.17,2.19,8.87,8.87,0,0,0,2.92,1.31,9.94,9.94,0,0,0,2.76.26,7,7,0,0,1,3.61,2.12A6,6,0,0,1,46.8,27v.2h0v8.06a6,6,0,0,1-1.1,3.94,7.15,7.15,0,0,1-4,2.22,7.14,7.14,0,0,1-4-2.22,6,6,0,0,1-1.1-3.94V27.19h0a3.82,3.82,0,0,0-.16-1.05,5.81,5.81,0,0,0-.87-1.72,8.64,8.64,0,0,0-2.17-2.18,8.53,8.53,0,0,0-2.91-1.31,9.24,9.24,0,0,0-2.76-.26A7,7,0,0,1,24,18.54,6,6,0,0,1,23,14.6v-8h0a3.84,3.84,0,0,0-.16-1.06,6,6,0,0,0-.86-1.72,9.16,9.16,0,0,0-2.17-2.18A8.67,8.67,0,0,0,16.82.28a9.35,9.35,0,0,0-2-.27H14.2a9.27,9.27,0,0,0-2,.27A8.59,8.59,0,0,0,9.25,1.59,8.37,8.37,0,0,0,7.7,3,8.76,8.76,0,0,0,6.14,1.59,8.59,8.59,0,0,0,3.22.28,9.5,9.5,0,0,0,0,.05,7.39,7.39,0,0,1,4.91,2.4,6,6,0,0,1,6,6.34V14.4H6a5,5,0,0,0,.16,1.06,5.76,5.76,0,0,0,.87,1.71,8.6,8.6,0,0,0,5.08,3.5,9.94,9.94,0,0,0,2.76.26,7,7,0,0,1,3.62,2.12A6,6,0,0,1,19.61,27v8.06h0a3.82,3.82,0,0,0,.16,1.05,5.81,5.81,0,0,0,.87,1.72A8.64,8.64,0,0,0,22.82,40a8.53,8.53,0,0,0,2.91,1.31,9.56,9.56,0,0,0,3.23.24A7.42,7.42,0,0,1,24,39.19,6,6,0,0,1,23,35.25V27.19h0a3.82,3.82,0,0,0-.16-1.05,6,6,0,0,0-.86-1.72,9,9,0,0,0-2.17-2.18,8.67,8.67,0,0,0-2.92-1.31,9.24,9.24,0,0,0-2.76-.26,7,7,0,0,1-3.61-2.13,6,6,0,0,1-1.1-3.94v-.2h0V6.34a6,6,0,0,1,1.1-3.94,7.15,7.15,0,0,1,4-2.22,7.14,7.14,0,0,1,4,2.22,6,6,0,0,1,1.1,3.94V14.4h0a4,4,0,0,0,.16,1.06,5.76,5.76,0,0,0,.87,1.71,8.6,8.6,0,0,0,5.08,3.5,9.94,9.94,0,0,0,2.76.26,7,7,0,0,1,3.62,2.12A6,6,0,0,1,33.2,27v8.06h0a3.82,3.82,0,0,0,.16,1.05,6,6,0,0,0,.86,1.72A9,9,0,0,0,36.41,40a8.67,8.67,0,0,0,2.92,1.31,9.35,9.35,0,0,0,2,.27H42a9.27,9.27,0,0,0,2-.27A8.59,8.59,0,0,0,46.9,40a8.37,8.37,0,0,0,1.55-1.41A8.76,8.76,0,0,0,50,40a8.59,8.59,0,0,0,2.92,1.31,9.51,9.51,0,0,0,3.22.24A7.4,7.4,0,0,1,51.24,39.19Z" />
    </SvgIcon>
  );
};

const StackedLogo = ({ fill, size, width, height }: LogoProps) => {
  return (
    <SvgIcon color="primary" viewBox="0 0 584.52 243.86">
      <path d="M20,124.11V233.55l-7.61,8.67a3.66,3.66,0,0,1-.9.57,2.37,2.37,0,0,1-.9.17,1,1,0,0,1-1.06-1.15V131a2.21,2.21,0,0,0-.25-1.15c-.16-.27-.54-.38-1.14-.32h-7a1.53,1.53,0,0,1-.82-.33.71.71,0,0,1-.24-.49A.9.9,0,0,1,.29,128a2.39,2.39,0,0,1,.93-.41l15-4.41c.65-.22,1.15-.37,1.51-.45a4.32,4.32,0,0,1,.94-.12,1.16,1.16,0,0,1,.94.44A1.73,1.73,0,0,1,20,124.11Zm-1.56,61-.9-1.56q6.8-8.17,13.21-11.65a28.5,28.5,0,0,1,13.79-3.48A27.4,27.4,0,0,1,60,173,31.76,31.76,0,0,1,70.91,185.7a42,42,0,0,1,4,18.9,46.19,46.19,0,0,1-4.37,20.69,33.4,33.4,0,0,1-12,13.7,31.72,31.72,0,0,1-17.38,4.87,27.52,27.52,0,0,1-15.42-4.26,32.15,32.15,0,0,1-10.43-11.12l1.39-1.31A28.51,28.51,0,0,0,26,237.27a23.53,23.53,0,0,0,13.29,3.81,21.34,21.34,0,0,0,12.39-3.93q5.68-3.93,9.08-11.82t3.39-19.51q0-10.87-3.06-18.4a26.63,26.63,0,0,0-8.3-11.49,19.27,19.27,0,0,0-11.95-4,23.64,23.64,0,0,0-11.2,3.11A36.32,36.32,0,0,0,18.4,185.13Z" />
      <path d="M123.35,168.59a35.47,35.47,0,0,1,18.18,5.86,33.88,33.88,0,0,1,11.9,14.07,41,41,0,0,1,3.46,19.9,39.58,39.58,0,0,1-5.76,19.17,34,34,0,0,1-13.57,12.46,36.51,36.51,0,0,1-19,3.72A35.16,35.16,0,0,1,100.57,238a33.3,33.3,0,0,1-11.79-13.9,40.66,40.66,0,0,1-3.42-19.74A41.57,41.57,0,0,1,91,185a33.17,33.17,0,0,1,13.37-12.64A36.18,36.18,0,0,1,123.35,168.59Zm-2,73.15a20.19,20.19,0,0,0,12.8-4.06,26.88,26.88,0,0,0,8.57-12.08q3.09-7.92,3.2-19.19,0-11.52-3.06-19.44a26.12,26.12,0,0,0-8.72-12.06,23.27,23.27,0,0,0-13.38-4.36,20.16,20.16,0,0,0-13.1,4.12,26.75,26.75,0,0,0-8.42,12.18,55.34,55.34,0,0,0-3,19.12,50.87,50.87,0,0,0,3.08,19,27.68,27.68,0,0,0,8.81,12.32A22.33,22.33,0,0,0,121.39,241.74Z" />
      <path d="M155.3,168.52a35.36,35.36,0,0,1,18.48,4.83,33.88,33.88,0,0,1,12.68,13.37A41.06,41.06,0,0,1,191,206.39a39.49,39.49,0,0,1-4.66,19.47,34.18,34.18,0,0,1-12.84,13.21,36.6,36.6,0,0,1-18.81,4.79,35.2,35.2,0,0,1-18.25-4.75,33.35,33.35,0,0,1-12.55-13.21,40.58,40.58,0,0,1-4.54-19.51,41.62,41.62,0,0,1,4.5-19.67,33.28,33.28,0,0,1,12.63-13.37A36.12,36.12,0,0,1,155.3,168.52Zm1.06,73.2a20.18,20.18,0,0,0,12.7-4.38q5.38-4.29,8.27-12.29A54.88,54.88,0,0,0,180,205.79q-.3-11.52-3.55-19.36a26,26,0,0,0-9-11.84,23.19,23.19,0,0,0-13.48-4A20.26,20.26,0,0,0,141,175a26.79,26.79,0,0,0-8.1,12.39,55.26,55.26,0,0,0-2.51,19.2,50.71,50.71,0,0,0,3.55,18.91,27.65,27.65,0,0,0,9.12,12.09A22.25,22.25,0,0,0,156.36,241.72Z" />
      <path d="M194.94,242.14a1,1,0,0,1-.78-.25,1,1,0,0,1-.2-.65.9.9,0,0,1,.37-.66,1.64,1.64,0,0,1,1.1-.32l5.4-.82a3.87,3.87,0,0,0,1.76-1,2.19,2.19,0,0,0,.61-1.56V131a2.32,2.32,0,0,0-.24-1.15c-.17-.27-.52-.38-1.07-.32h-7.11a1.65,1.65,0,0,1-.78-.33.68.68,0,0,1-.29-.49A.87.87,0,0,1,194,128a3,3,0,0,1,.82-.41l15-4.41c.65-.22,1.16-.37,1.51-.45a4.14,4.14,0,0,1,.86-.12,1.36,1.36,0,0,1,1.11.44,1.72,1.72,0,0,1,.36,1.11V236.74a2.7,2.7,0,0,0,.57,1.76,3.05,3.05,0,0,0,1.81.94l5.31.82c.87.11,1.31.46,1.31,1.06s-.44.82-1.31.82Zm16.2-29.45,33.94-32.47q3-2.94,2.62-5t-3.85-2.58l-3.43-.57a3.89,3.89,0,0,1-.94-.33.68.68,0,0,1-.29-.65.71.71,0,0,1,.37-.69,1.9,1.9,0,0,1,.94-.21H264a2,2,0,0,1,1.1.25.76.76,0,0,1,.37.65.87.87,0,0,1-.37.69,3.28,3.28,0,0,1-1.43.46,24.71,24.71,0,0,0-8.06,2.57,34.68,34.68,0,0,0-8,5.93l-35.83,34Zm21.67-19.22,25.36,41.06a11.9,11.9,0,0,0,3.72,4,15.57,15.57,0,0,0,5.11,1.63,3.33,3.33,0,0,1,1.11.5.81.81,0,0,1,.28.65.72.72,0,0,1-.28.57,1.44,1.44,0,0,1-.95.25H240.09a1.47,1.47,0,0,1-.86-.25.7.7,0,0,1-.37-.57.91.91,0,0,1,.33-.7,1.91,1.91,0,0,1,1.06-.36l3.85-.49q2.37-.17,2.82-1.56c.3-.92-.07-2.23-1.1-3.92l-20.45-33.7Z" />
      <path d="M298.16,170.32q-6.78,0-10.83,3.64a12.22,12.22,0,0,0-4.05,9.53,13.3,13.3,0,0,0,1.8,6.95,16.54,16.54,0,0,0,6.05,5.53,54.83,54.83,0,0,0,11.53,4.7,58.45,58.45,0,0,1,14.28,6.05,20.86,20.86,0,0,1,7.52,7.61,20.3,20.3,0,0,1,2.25,9.65q0,9.17-6.34,14.48t-17.22,5.32a27.44,27.44,0,0,1-8-1,25.71,25.71,0,0,1-4.95-2,6.27,6.27,0,0,0-2.49-1,3.35,3.35,0,0,0-2.13,1l-2.29,2a3.34,3.34,0,0,1-1.72,1,1,1,0,0,1-.74-.25,2.79,2.79,0,0,1-.49-1l-5.64-20.37a2.22,2.22,0,0,1-.12-1.23,1.09,1.09,0,0,1,.69-.81.78.78,0,0,1,.82,0,1.84,1.84,0,0,1,.74.77,47.65,47.65,0,0,0,7.32,12.27,23.88,23.88,0,0,0,8.58,6.55,26,26,0,0,0,10.19,2q7.68,0,12.1-3.72a12.42,12.42,0,0,0,4.42-10,13.49,13.49,0,0,0-1.76-6.83,15.67,15.67,0,0,0-6.21-5.56A59.52,59.52,0,0,0,299,210.73a52.23,52.23,0,0,1-13.37-5.6,20.22,20.22,0,0,1-7.4-7.61,20.89,20.89,0,0,1-2.29-9.85,18.07,18.07,0,0,1,10.42-17,25.55,25.55,0,0,1,11.5-2.45,19.81,19.81,0,0,1,7.6,1.31,31.65,31.65,0,0,1,5.2,2.61,6.68,6.68,0,0,0,2.82,1.31c.38,0,.89-.41,1.51-1.22s1.24-1.66,1.84-2.5,1.15-1.27,1.64-1.27a1.1,1.1,0,0,1,.61.29,1.65,1.65,0,0,1,.53,1l4.26,18.49a6,6,0,0,1,.08,1.63,1.06,1.06,0,0,1-.49.82c-.38.16-.67.15-.86,0a6.29,6.29,0,0,1-.7-.94Q317,179,310.68,174.66A22,22,0,0,0,298.16,170.32Z" />
      <path d="M343.31,173.27l-7.11-1.15a3.21,3.21,0,0,1-1.19-.49.81.81,0,0,1-.29-.65.7.7,0,0,1,.29-.66,1.48,1.48,0,0,1,.7-.16h7.11a4,4,0,0,0,2-.37,2.59,2.59,0,0,0,1.07-1.27L352.72,155a4.93,4.93,0,0,1,.9-1,1.29,1.29,0,0,1,.82-.33,1,1,0,0,1,.82.33,1.48,1.48,0,0,1,.24.9V227q0,5.9,2.41,8.8a8.11,8.11,0,0,0,6.59,2.9,10.88,10.88,0,0,0,3.64-.53,8.43,8.43,0,0,0,2.65-1.47,14.13,14.13,0,0,0,2.13-2.17,25.37,25.37,0,0,0,1.8-2.53.55.55,0,0,1,.66-.05c.16.14.21.43.16.86a15.17,15.17,0,0,1-3,5.61,14,14,0,0,1-4.91,3.64,16.14,16.14,0,0,1-6.67,1.31q-7.2,0-11.45-3.64t-4.25-11.17V175.8a3.24,3.24,0,0,0-.37-1.71A2.35,2.35,0,0,0,343.31,173.27Zm7.85-.9.09-2.21h22.82a1.66,1.66,0,0,1,.9.21.67.67,0,0,1,.32.61,1.15,1.15,0,0,1-.65,1,3.84,3.84,0,0,1-1.88.37Z" />
      <path d="M419.06,168.52a35.38,35.38,0,0,1,18.48,4.83,34,34,0,0,1,12.68,13.37,41.06,41.06,0,0,1,4.58,19.67,39.6,39.6,0,0,1-4.66,19.47,34.18,34.18,0,0,1-12.84,13.21,36.61,36.61,0,0,1-18.82,4.79,35.19,35.19,0,0,1-18.24-4.75,33.28,33.28,0,0,1-12.55-13.21,40.58,40.58,0,0,1-4.54-19.51,41.62,41.62,0,0,1,4.5-19.67,33.21,33.21,0,0,1,12.63-13.37A36.12,36.12,0,0,1,419.06,168.52Zm-.62,73.22A20.17,20.17,0,0,0,431.33,238a26.92,26.92,0,0,0,8.84-11.88q3.25-7.86,3.62-19.12.25-11.52-2.63-19.5a26,26,0,0,0-8.45-12.25,23.08,23.08,0,0,0-13.28-4.65,20.11,20.11,0,0,0-13.19,3.82,26.68,26.68,0,0,0-8.68,12,55.38,55.38,0,0,0-3.42,19,50.69,50.69,0,0,0,2.66,19.06A27.48,27.48,0,0,0,405.34,237,22.3,22.3,0,0,0,418.44,241.74Z" />
      <path d="M484.25,170.81v65.77a2.42,2.42,0,0,0,.65,1.75,3.52,3.52,0,0,0,2,.95l8,.89a3,3,0,0,1,1.06.41.8.8,0,0,1,.33.66.77.77,0,0,1-.33.65,1.57,1.57,0,0,1-1,.25H465.84a1.63,1.63,0,0,1-.94-.25.76.76,0,0,1-.37-.65.94.94,0,0,1,.37-.66,1.55,1.55,0,0,1,1-.32l5.47-.82a3.07,3.07,0,0,0,1.8-.9,2.42,2.42,0,0,0,.58-1.64V177.44a2.3,2.3,0,0,0-.21-1.06c-.14-.28-.48-.44-1-.5h-7.28a1.69,1.69,0,0,1-.7-.28.57.57,0,0,1-.28-.45.79.79,0,0,1,.28-.65,3.42,3.42,0,0,1,.86-.5l15.05-4.09a9.21,9.21,0,0,1,1.6-.49,6.51,6.51,0,0,1,.86-.08,1.13,1.13,0,0,1,.9.37A2.07,2.07,0,0,1,484.25,170.81ZM483,203.28q0-11.35,3.15-19.09t8.06-11.74a16,16,0,0,1,10.22-4q6,0,9.28,3.4a12.3,12.3,0,0,1,3.23,8.87,8.24,8.24,0,0,1-1.63,5.56,5.26,5.26,0,0,1-4.17,1.88,5,5,0,0,1-3.72-1.47,5.94,5.94,0,0,1-1.44-4.33l-.08-2.21c0-2.18-.44-3.74-1.31-4.66s-2.37-1.39-4.5-1.39q-3.75,0-7.4,3.31t-6,9.86a47.07,47.07,0,0,0-2.41,16.19Z" />
      <path d="M584.52,197.31a2.34,2.34,0,0,1-.86,1.93,3.47,3.47,0,0,1-2.25.69H530.29v-1.88l41.26-1.31c1.25,0,2.41,0,2.41-1.21,0-8.24-1.88-13.87-5.18-18.34a15.38,15.38,0,0,0-13-6.7,18.84,18.84,0,0,0-12.06,3.92,24.78,24.78,0,0,0-7.61,11.13,48.85,48.85,0,0,0-2.65,16.93q0,16.77,7.52,25.8a24.23,24.23,0,0,0,19.55,9,22.42,22.42,0,0,0,14.23-4.74A20.5,20.5,0,0,0,582.4,220a1.56,1.56,0,0,1,.41-.78.88.88,0,0,1,.57-.2.71.71,0,0,1,.61.29,1.61,1.61,0,0,1,.21.94,25.68,25.68,0,0,1-4.71,12,27.39,27.39,0,0,1-10,8.51,29.71,29.71,0,0,1-13.7,3.11A32.06,32.06,0,0,1,539,239.48,29.36,29.36,0,0,1,527.68,227q-4-8.08-4-19.22a46.64,46.64,0,0,1,4.13-20,34.73,34.73,0,0,1,11.66-14.11,29.68,29.68,0,0,1,17.5-5.28,27.45,27.45,0,0,1,14.52,3.76,26,26,0,0,1,9.61,10.27A31.45,31.45,0,0,1,584.52,197.31Z" />
      <path d="M431.15,206.14c-8.86,1.7-10.24,3.08-11.94,11.94-1.7-8.86-3.08-10.24-11.94-11.94,8.86-1.7,10.24-3.08,11.94-11.94.85,4.43,1.62,7,3.29,8.65S426.72,205.29,431.15,206.14Z" />
      <path d="M73.39,51.44A31.72,31.72,0,0,0,69.5,40.87a18.42,18.42,0,0,0-7.19-6.77,23,23,0,0,0-10.93-2.38H32.73c-4.29,0-10.21.28-14.21.28h-9V51c.19,4.19,0,9.15,0,14.21v45.4H19.7V67.33q0-13.69,4-20C26.4,43.16,28.54,42,42.05,42s15.65,1.16,18.32,5.32,4,10.88,4,20v73.28H74.59V65.21A72.49,72.49,0,0,0,73.39,51.44Z" />
      <path d="M99.29,140.61V30.52c0-6.39.23-11.52.23-16.52V0h36V9H115.31a5.79,5.79,0,0,0-5.8,5.78c0,4.81,0,10.65,0,15.44v2.39h67.05V40.7H109.47v99.91Zm-24.7,0h24.7v-8H74.59Z" />
      <path d="M182.38,136.47q-1.2.45-3.75,1.65a33.59,33.59,0,0,1-6.13,2.09,32.08,32.08,0,0,1-7.79.9,20.38,20.38,0,0,1-8.16-1.65,13.72,13.72,0,0,1-6.06-5c-1.5-2.25-2.25-10-2.25-13.34V18h10.18V118.25c.2,2.81,1.22,9.92,3.07,11.32a10.21,10.21,0,0,0,6.37,2.11,19.79,19.79,0,0,0,7.63-1.42,23,23,0,0,0,4.19-2Z" />
    </SvgIcon>
  );
};

const HorizontalLogo = ({
  fill,
  size,
  width = 140,
  height = 70
}: LogoProps) => {
  return (
    <Box component="svg" preserveAspectRatio="xMidYMid meet" fill="#FFFFFF">
      <path d="M269.43,1.55V111l-7.6,8.67a3.66,3.66,0,0,1-.9.57,2.44,2.44,0,0,1-.9.16,1,1,0,0,1-1.07-1.14V8.42a2.25,2.25,0,0,0-.24-1.14c-.16-.27-.55-.38-1.15-.33h-7a1.42,1.42,0,0,1-.82-.32.73.73,0,0,1-.24-.5.91.91,0,0,1,.28-.73A2.45,2.45,0,0,1,250.7,5l15-4.42c.65-.21,1.16-.37,1.51-.45a4.39,4.39,0,0,1,.94-.12,1.19,1.19,0,0,1,.95.45A1.71,1.71,0,0,1,269.43,1.55Zm-1.55,61L267,61q6.79-8.19,13.21-11.66A28.45,28.45,0,0,1,294,45.89a27.33,27.33,0,0,1,15.54,4.58,31.77,31.77,0,0,1,10.88,12.68,42.08,42.08,0,0,1,4,18.89A46,46,0,0,1,320,102.73a33.24,33.24,0,0,1-12,13.7,31.63,31.63,0,0,1-17.38,4.87,27.55,27.55,0,0,1-15.42-4.25,32.18,32.18,0,0,1-10.43-11.13l1.39-1.3a28.65,28.65,0,0,0,9.28,10.1,23.66,23.66,0,0,0,13.3,3.8,21.34,21.34,0,0,0,12.39-3.93q5.69-3.93,9.08-11.81t3.39-19.51q0-10.89-3.06-18.41a26.62,26.62,0,0,0-8.31-11.49,19.28,19.28,0,0,0-11.94-4,23.79,23.79,0,0,0-11.21,3.11A36.55,36.55,0,0,0,267.88,62.57Z" />
      <path d="M372.83,46A35.48,35.48,0,0,1,391,51.9,33.88,33.88,0,0,1,402.91,66a41.06,41.06,0,0,1,3.46,19.9A39.58,39.58,0,0,1,400.61,105,34.24,34.24,0,0,1,387,117.5,36.55,36.55,0,0,1,368,121.21a35,35,0,0,1-17.94-5.77,33.24,33.24,0,0,1-11.79-13.9,40.49,40.49,0,0,1-3.43-19.73,41.65,41.65,0,0,1,5.6-19.38,33.19,33.19,0,0,1,13.38-12.64A36.08,36.08,0,0,1,372.83,46Zm-2,73.16a20.21,20.21,0,0,0,12.81-4.07,26.85,26.85,0,0,0,8.57-12.07,54.81,54.81,0,0,0,3.2-19.19q0-11.53-3.07-19.45a26,26,0,0,0-8.71-12.06A23.19,23.19,0,0,0,370.28,48a20.2,20.2,0,0,0-13.1,4.11,26.8,26.8,0,0,0-8.42,12.18,55.4,55.4,0,0,0-3,19.13,50.65,50.65,0,0,0,3.08,19,27.55,27.55,0,0,0,8.81,12.32A22.31,22.31,0,0,0,370.86,119.19Z" />
      <path d="M404.77,46a35.39,35.39,0,0,1,18.49,4.83,33.82,33.82,0,0,1,12.68,13.37,41,41,0,0,1,4.58,19.67,39.49,39.49,0,0,1-4.67,19.46A34,34,0,0,1,423,116.51a36.45,36.45,0,0,1-18.81,4.79A35.16,35.16,0,0,1,386,116.56a33.28,33.28,0,0,1-12.55-13.21,40.63,40.63,0,0,1-4.54-19.51,41.59,41.59,0,0,1,4.49-19.67A33.18,33.18,0,0,1,386,50.8,36.1,36.1,0,0,1,404.77,46Zm1.07,73.2a20.27,20.27,0,0,0,12.7-4.39q5.38-4.27,8.26-12.28a54.73,54.73,0,0,0,2.72-19.27q-.3-11.52-3.55-19.36A26.09,26.09,0,0,0,417,52a23.15,23.15,0,0,0-13.49-4,20.12,20.12,0,0,0-13,4.44,26.77,26.77,0,0,0-8.11,12.38,55.27,55.27,0,0,0-2.5,19.2A50.67,50.67,0,0,0,383.41,103,27.46,27.46,0,0,0,392.53,115,22.24,22.24,0,0,0,405.84,119.17Z" />
      <path d="M444.42,119.58a1,1,0,0,1-.78-.24,1,1,0,0,1-.2-.66.9.9,0,0,1,.36-.65,1.64,1.64,0,0,1,1.11-.33l5.4-.82a3.7,3.7,0,0,0,1.76-1,2.21,2.21,0,0,0,.61-1.55V8.42a2.24,2.24,0,0,0-.25-1.14c-.16-.27-.52-.38-1.06-.33h-7.12a1.51,1.51,0,0,1-.77-.32.7.7,0,0,1-.29-.5.85.85,0,0,1,.33-.73,3.07,3.07,0,0,1,.81-.41L459.38.57C460,.36,460.54.2,460.9.12a4.05,4.05,0,0,1,.86-.12,1.33,1.33,0,0,1,1.1.45,1.66,1.66,0,0,1,.37,1.1V114.18a2.68,2.68,0,0,0,.57,1.76,2.94,2.94,0,0,0,1.8.94l5.32.82c.87.11,1.31.47,1.31,1.06s-.44.82-1.31.82Zm16.19-29.44,33.95-32.48c2-2,2.89-3.64,2.61-5s-1.55-2.25-3.84-2.58l-3.44-.58a3.85,3.85,0,0,1-.94-.32.7.7,0,0,1-.28-.66.73.73,0,0,1,.37-.69,1.84,1.84,0,0,1,.94-.21h23.47a2.07,2.07,0,0,1,1.11.25.75.75,0,0,1,.36.65.86.86,0,0,1-.36.7,3.44,3.44,0,0,1-1.43.45,24.66,24.66,0,0,0-8.06,2.58,34.87,34.87,0,0,0-8,5.92l-35.83,34Zm21.68-19.23L507.64,112a12.05,12.05,0,0,0,3.72,4,16.13,16.13,0,0,0,5.12,1.63,3.29,3.29,0,0,1,1.1.49.83.83,0,0,1,.29.65.76.76,0,0,1-.29.58,1.45,1.45,0,0,1-.94.24H489.57a1.52,1.52,0,0,1-.86-.24.7.7,0,0,1-.37-.58.88.88,0,0,1,.33-.69,2,2,0,0,1,1.06-.37l3.85-.49c1.58-.11,2.52-.63,2.82-1.55s-.07-2.24-1.11-3.93L474.84,78Z" />
      <path d="M547.64,47.77q-6.78,0-10.84,3.64a12.18,12.18,0,0,0-4,9.53,13.32,13.32,0,0,0,1.79,7,16.47,16.47,0,0,0,6.06,5.52,54.6,54.6,0,0,0,11.53,4.7,57.78,57.78,0,0,1,14.27,6.06,20.79,20.79,0,0,1,7.53,7.6,20.35,20.35,0,0,1,2.25,9.65q0,9.17-6.34,14.48t-17.22,5.32a26.32,26.32,0,0,1-13-2.94,6.29,6.29,0,0,0-2.49-1,3.37,3.37,0,0,0-2.12,1l-2.29,2a3.35,3.35,0,0,1-1.73,1,1,1,0,0,1-.73-.25,2.55,2.55,0,0,1-.49-1l-5.64-20.36A2.14,2.14,0,0,1,524,98.4a1.13,1.13,0,0,1,.7-.82.8.8,0,0,1,.82,0,1.85,1.85,0,0,1,.73.78,48.58,48.58,0,0,0,7.32,12.27,23.87,23.87,0,0,0,8.59,6.54,25.78,25.78,0,0,0,10.19,2q7.68,0,12.1-3.72a12.41,12.41,0,0,0,4.42-10,13.52,13.52,0,0,0-1.76-6.83A15.78,15.78,0,0,0,560.93,93a60.53,60.53,0,0,0-12.47-4.79,52,52,0,0,1-13.38-5.6,20.35,20.35,0,0,1-7.4-7.6,21,21,0,0,1-2.29-9.86,18.05,18.05,0,0,1,10.43-17,25.5,25.5,0,0,1,11.49-2.46A20.05,20.05,0,0,1,554.92,47a31.06,31.06,0,0,1,5.19,2.62,6.7,6.7,0,0,0,2.83,1.31c.38,0,.88-.41,1.51-1.23s1.24-1.65,1.84-2.5,1.15-1.26,1.63-1.26a1.1,1.1,0,0,1,.62.28,1.82,1.82,0,0,1,.53,1l4.25,18.49a6.21,6.21,0,0,1,.09,1.64,1.09,1.09,0,0,1-.5.82c-.38.16-.66.15-.86,0a7.45,7.45,0,0,1-.69-.95q-4.9-10.71-11.2-15.05A22,22,0,0,0,547.64,47.77Z" />
      <path d="M592.79,50.71l-7.12-1.14a3.29,3.29,0,0,1-1.18-.5.8.8,0,0,1-.29-.65.69.69,0,0,1,.29-.65,1.36,1.36,0,0,1,.69-.17h7.12a4.17,4.17,0,0,0,2-.36A2.69,2.69,0,0,0,595.33,46l6.87-13.5a5.56,5.56,0,0,1,.89-1,1.33,1.33,0,0,1,.82-.33.94.94,0,0,1,.82.33,1.5,1.5,0,0,1,.25.9v72.06q0,5.89,2.41,8.79a8.11,8.11,0,0,0,6.58,2.91,11.25,11.25,0,0,0,3.65-.53,8.77,8.77,0,0,0,2.65-1.48A13.69,13.69,0,0,0,622.4,112a27.66,27.66,0,0,0,1.8-2.53c.27-.16.49-.17.65,0s.22.42.17.86a15.14,15.14,0,0,1-3,5.6,13.83,13.83,0,0,1-4.91,3.64,16.06,16.06,0,0,1-6.66,1.31q-7.2,0-11.45-3.64T594.75,106V53.25a3.19,3.19,0,0,0-.37-1.72A2.37,2.37,0,0,0,592.79,50.71Zm7.85-.9.08-2.21h22.82a1.62,1.62,0,0,1,.9.21.68.68,0,0,1,.33.61,1.12,1.12,0,0,1-.65,1,3.88,3.88,0,0,1-1.89.37Z" />
      <path d="M668.53,46A35.39,35.39,0,0,1,687,50.8,33.82,33.82,0,0,1,699.7,64.17a41,41,0,0,1,4.58,19.67,39.49,39.49,0,0,1-4.67,19.46,34,34,0,0,1-12.84,13.21A36.45,36.45,0,0,1,668,121.3a35.13,35.13,0,0,1-18.24-4.74,33.21,33.21,0,0,1-12.55-13.21,40.63,40.63,0,0,1-4.54-19.51,41.59,41.59,0,0,1,4.49-19.67A33.11,33.11,0,0,1,649.76,50.8,36.05,36.05,0,0,1,668.53,46Zm-.62,73.21a20.19,20.19,0,0,0,12.9-3.78q5.58-4,8.83-11.88t3.63-19.11q.24-11.52-2.64-19.51a26,26,0,0,0-8.44-12.25A23.28,23.28,0,0,0,668.91,48a20.16,20.16,0,0,0-13.19,3.82,26.82,26.82,0,0,0-8.69,12,55.46,55.46,0,0,0-3.41,19.06,50.64,50.64,0,0,0,2.66,19,27.63,27.63,0,0,0,8.53,12.52A22.31,22.31,0,0,0,667.91,119.18Z" />
      <path d="M733.72,48.26V114a2.45,2.45,0,0,0,.66,1.76,3.41,3.41,0,0,0,2,.94l8,.9a3,3,0,0,1,1.06.41.77.77,0,0,1,.33.65.78.78,0,0,1-.33.66,1.67,1.67,0,0,1-1,.24H715.32a1.68,1.68,0,0,1-.94-.24.75.75,0,0,1-.37-.66.89.89,0,0,1,.37-.65,1.46,1.46,0,0,1,1-.33l5.48-.82a3.13,3.13,0,0,0,1.8-.89,2.43,2.43,0,0,0,.57-1.64V54.88a2.47,2.47,0,0,0-.2-1.06,1.19,1.19,0,0,0-1-.49h-7.28a1.78,1.78,0,0,1-.7-.29.56.56,0,0,1-.29-.45.81.81,0,0,1,.29-.65,3.15,3.15,0,0,1,.86-.49L730,47.36a8.57,8.57,0,0,1,1.59-.49,5.56,5.56,0,0,1,.86-.09,1.15,1.15,0,0,1,.9.37A2,2,0,0,1,733.72,48.26ZM732.5,80.73q0-11.37,3.14-19.1t8.06-11.74a16,16,0,0,1,10.23-4q6,0,9.28,3.39a12.35,12.35,0,0,1,3.23,8.87,8.34,8.34,0,0,1-1.63,5.57,5.33,5.33,0,0,1-4.18,1.88,4.92,4.92,0,0,1-3.72-1.48,6,6,0,0,1-1.43-4.33l-.08-2.21c0-2.18-.44-3.73-1.31-4.66s-2.37-1.39-4.5-1.39c-2.51,0-5,1.11-7.4,3.31s-4.45,5.5-6.05,9.86a47.11,47.11,0,0,0-2.42,16.2Z" />
      <path d="M834,74.76a2.33,2.33,0,0,1-.86,1.92,3.42,3.42,0,0,1-2.25.7H779.77V75.5L821,74.18c1.26,0,2.42,0,2.42-1.21,0-8.23-1.89-13.86-5.19-18.33a15.37,15.37,0,0,0-13-6.71,18.77,18.77,0,0,0-12.06,3.93A24.6,24.6,0,0,0,785.62,63,48.88,48.88,0,0,0,783,79.91q0,16.77,7.53,25.81a24.21,24.21,0,0,0,19.54,9A22.37,22.37,0,0,0,824.27,110a20.49,20.49,0,0,0,7.6-12.59,1.6,1.6,0,0,1,.41-.78.93.93,0,0,1,.58-.2.7.7,0,0,1,.61.28,1.73,1.73,0,0,1,.2.94,25.6,25.6,0,0,1-4.7,12,27.44,27.44,0,0,1-10,8.5,29.61,29.61,0,0,1-13.7,3.11,32,32,0,0,1-16.85-4.38,29.3,29.3,0,0,1-11.29-12.47q-4-8.1-4-19.22a46.68,46.68,0,0,1,4.13-20,34.84,34.84,0,0,1,11.65-14.11,29.71,29.71,0,0,1,17.51-5.28A27.3,27.3,0,0,1,821,49.57a26,26,0,0,1,9.62,10.26A31.49,31.49,0,0,1,834,74.76Z" />
      <path d="M680.63,83.58c-8.86,1.71-10.24,3.08-11.94,12-1.7-8.87-3.08-10.24-11.94-12,8.86-1.7,10.24-3.07,11.94-11.94a27.64,27.64,0,0,0,1.81,6.5C672.06,81.43,674.63,82.43,680.63,83.58Z" />
      <polygon points="217.13 57.69 219.04 72.05 231.46 64.6 221.43 75.04 235 80.11 220.58 78.78 225.08 92.55 217.13 80.44 209.17 92.55 213.68 78.78 199.25 80.11 212.82 75.04 202.79 64.6 215.21 72.05 217.13 57.69" />
      <path d="M63.87,65.7A31.72,31.72,0,0,0,60,55.13a18.44,18.44,0,0,0-7.19-6.78A23.17,23.17,0,0,0,41.86,46l-5.22,0H34.28c-.58,0-1.17,0-1.75,0s-1.16,0-1.74,0H28.43l-5.22,0C18.92,46,13,46.26,9,46.26H0v19c.19,4.19,0,9.14,0,14.2v45.41H10.18V81.58q0-13.68,4-20c2.66-4.16,4.8-5.29,18.31-5.32s15.65,1.16,18.31,5.32,4,10.88,4,20v43.29H65.07V79.46A72.31,72.31,0,0,0,63.87,65.7Z" />
      <path d="M89.77,124.87V44.77c0-6.38.23-11.51.23-16.51v-14h36v9H105.79A5.79,5.79,0,0,0,100,29c0,4.81,0,10.65,0,15.43v2.4H167V55H100v69.92Zm-24.7,0h24.7v-8H65.07Z" />
      <path d="M172.86,120.73c-.8.29-2.05.84-3.75,1.64a33.56,33.56,0,0,1-6.13,2.1,32.08,32.08,0,0,1-7.79.9,20.35,20.35,0,0,1-8.16-1.66,13.64,13.64,0,0,1-6.06-5,14.76,14.76,0,0,1-2.25-8.35V32.26H148.9v75.25a8.2,8.2,0,0,0,3.07,6.32,10.26,10.26,0,0,0,6.36,2.1,19.8,19.8,0,0,0,7.64-1.42,23,23,0,0,0,4.19-2Z" />
    </Box>
  );
};

export { Logo, StackedLogo, HorizontalLogo };