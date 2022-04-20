const   ContatosContrellers =   {
    index:(req,res)=>{
       return res.render('contato');
    },
    estudante:(req,res)=>{
        return res.render('estudante')
    }
};

module.exports = ContatosContrellers;