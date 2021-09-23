import React from 'react'

import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
    return (
        <form >


            <TextField variant="outlined" id="Nome" label="Nome" margin="normal" fullWidth />

            <TextField variant="outlined" id="Sobrenome" label="Sobrenome" margin="normal" fullWidth />

            <TextField variant="outlined" id="CPF" label="CPF" margin="normal" fullWidth />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        defaultChecked
                        name="Promoções"
                        color="primary"
                    />
                }
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        defaultChecked
                        name="Novidades"
                        color="primary"
                    />
                }
            />
            <Button variant='contained' color="primary"> Cadastrar </Button>

        </form>
    )
}
export default FormularioCadastro;