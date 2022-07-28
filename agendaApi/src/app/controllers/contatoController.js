const Contato = require('../models/contato')

exports.post = async (req, res, next) => {
    const { nome, sobrenome, telefone } = req.body;
    const contato = { nome, sobrenome, telefone };

    try{

       await Contato.create(contato);
       res.status(201).json({message: "Contato salvo com sucesso!"})

    }catch(error){

        message = "Não foi possível salvar o contato. Erro: " + error
        res.status(500).json({ erro: message });

    }

} 

exports.get = async (req, res, next) => {
    try{

        const listaContatos = await Contato.find()
        if(!listaContatos || listaContatos.length == 0){
            res.status(404).json({message: 'Lista de contatos não encontrada.'})
            return
        }else{
            res.status(201).json(listaContatos);
        }

    }catch(error){
        message = "Não foi possível encontrar contatos. Erro: " + error
        res.status(500).json({ erro: message });
    }
} 

exports.getById = async (req, res, next) => {
     try{

        let id = req.params.id
        const contato = await Contato.findOne({_id:id})
        if(!contato){
            res.status(404).json({message: 'Contato não encontrado.'})
            return
        }else{
            res.status(201).json(contato);
        }

    }catch(error){
        message = "Não foi possível encontrar o contato. Erro: " + error
        res.status(500).json({ erro: message });
    }
}

exports.put = async (req, res, next) => {
    
} 

exports.delete = async (req, res, next) => {
    try{

        let id = req.params.id
        let contato = await Contato.findOne({_id:id})
        if (contato != null){
            await Contato.deleteOne({_id:id})
        } else{
            res.status(500).json({message: 'não existe contato a ser removido.'})
            return
        } 

        
        contato = await Contato.findOne({_id:id})
        if(contato == null){
            res.status(201).json({message: 'Contato removido com sucesso.'})
        }else{
            res.status(500).json({message: 'Não foi possivel remover o contato.'})
            return
        }

    }catch(error){
        message = "Ocorreu um erro ao remover contato. Erro: " + error
        res.status(500).json({ erro: message });
    }
} 

const existeContato = async (id) =>{
    try{
        let contato = await Contato.findOne({_id:id})

        let existeContato = contato != null ? true: false;
        return existeContato;
    }catch(error){
       return false;
    }
}



