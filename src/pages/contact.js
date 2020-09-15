import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { makeStyles } from '@material-ui/core/styles';

function Contact() {
    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [mensagem, setMensagem] = React.useState("");

    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    const Save = (event) => {
        alert("Salvou!")
        console.log(`
          Nome: ${nome}
          Email: ${email}
          Telefone: ${telefone}
          Mensagem: ${mensagem}
        `);
        console.log(
            'Nome: ' + nome + ' - ' +
            ' Email: ' + email + ' - ' +
            ' Telefone: ' + telefone + ' - ' +
            ' Mensagem: ' + mensagem
        );
        event.preventDefault();
    }

    return (
        <div class="container-page">
            <h1> Formas de entrar em contato </h1>
            <div>
                <div>
                    <TextField id="nome" label="Nome" value={nome} onChange={e => setNome(e.target.value)} required fullWidth />
                </div>
                <div>
                    <TextField id="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} required fullWidth />
                </div>
                <div>
                    <TextField id="telefone" label="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} required fullWidth />
                </div>
                <div>
                    <TextField id="mensagem" label="Mensagem" value={mensagem} onChange={e => setMensagem(e.target.value)} required fullWidth />
                </div>
            </div>
            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    onClick={Save}>
                    Salvar
                </Button>
            </div>
            <footer>
                <h6> Entre em contato conosco </h6>
                <div>
                    <Button startIcon={<PhoneIcon />}>(45) 3254-9987</Button>
                </div>
                <div>
                    <Button startIcon={<PhoneAndroidIcon/>}>(45) 99985-0585</Button>
                </div>
            </footer>
        </div>
    );
}

export default Contact;