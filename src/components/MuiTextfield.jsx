import { TextField, Stack, InputAdornment } from "@mui/material";

const MuiTextfield = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>

            <TextField label='name' variant="outlined"/>
           {/*  Default textfield of Mui. varaiant here is not required */}

           <TextField label='OTP' variant="filled" helperText='do not share it to anyone else'/>
           {/* helperText is used to notify/warn user regarding the text field */}

           <TextField label='Password' variant="standard" type="password"/>
           
        </Stack>

        <Stack spacing={2} direction='row'>

            <TextField  variant="filled" value='Shubham' InputProps={{readOnly:true}}/>
            {/*  InputProps helps you control content of textField.
            ReadOnly help textField uneditable for user */}

            <TextField value='Wrong entry' error/>
            {/* To notify wrong entry during validation */}
           
        </Stack>


        <Stack spacing={2} direction='row'>

            <TextField  label='Amount' InputProps={{
                startAdornment:<InputAdornment position="start">$</InputAdornment>,
            }}/>

            <TextField  label='Weight' InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
            />
            
           
        </Stack>

    </Stack>
  )
}

export default MuiTextfield