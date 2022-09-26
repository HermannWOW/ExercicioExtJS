var Gnome = null;
var Gidade = null;
var Gnasc = null;

Ext.define('Curso.Janela',{
	extend: 'Ext.window.Window',
	height: 400,
	width: 500,
	title: 'Exercício - ExtJotaÉsse',
	autoShow: true,
	autoScroll: true,
	layout: 'accordion',
	items: [
		{
			xtype: 'panel',
			title: 'Cadastro',
			items: [
				{
					xtype: 'textfield',
					itemId: 'txtNome',
					fieldLabel: 'Nome:',
					labelAlign: 'right',
					labelWidth: 70,
					padding: 5
				},
				{
					xtype: 'datefield',
					itemId: 'dtNascimento',
					fieldLabel: 'Nascimento:',
					labelAlign: 'right',
					labelWidth: 70,
					padding: 5,
					format: 'd/m/Y'
				},
				{
					xtype: 'numberfield',
					itemId: 'numIdade',
					fieldLabel: 'Idade:',
					labelAlign: 'right',
					labelWidth: 70,
					padding: 5,
					width: 150,
					maxValue: 99
				},
				{
					xtype: 'button',
					itemId: 'btnSalvar',
					text: 'Salvar',
					width: 80,
					margin: (0,0,0,5),
					handler: function(botao) {
						//debugger;
						let nome = botao.up('panel').queryById('txtNome');
						let idade = botao.up('panel').queryById('numIdade');
						let nasc = botao.up('panel').queryById('dtNascimento');
						let dados = `${nome.getValue()}\n${nasc.getValue()}\n${idade.getValue()}`; 

						Gnome = nome.getValue();
						Gidade = idade.getValue();
						Gnasc = nasc.getValue();
						
						nome.setValue(null);
						idade.setValue(null);
						nasc.setValue(null);
						
						if(Gnome != null && Gnasc != null && Gidade != null){

							Ext.MessageBox.alert('Sucesso','Cadastro efetuado!', function(botao){
								console.log(dados);
							});

						}else{
							
							Ext.MessageBox.alert({
								title: 'Atenção!',
								msg: 'Todos os campos são obrigatórios para cadastro.',
								icon: Ext.MessageBox.WARNING
							});

						}
						
					}
				}
			]
		},
		{
			xtype: 'panel',
			title: 'Visualização',
			items: [
				{
					xtype: 'textfield',
					itemId: 'vwNome',
					fieldLabel: 'Nome:',
					labelAlign: 'right',
					labelWidth: 70,
					padding: 5,
					readOnly: true
				},
				{
					xtype: 'datefield',
					itemId: 'vwNascimento',
					fieldLabel: 'Nascimento:',
					labelAlign: 'right',
					labelWidth: 70,
					padding: 5,
					readOnly: true,
					format: 'd/m/Y'
				},
				{
					xtype: 'textfield',
					itemId: 'vwIdade',
					fieldLabel: 'Idade:',
					labelAlign: 'right',
					labelWidth: 70,
					padding: 5,
					width: 150,
					readOnly: true
				},
				{
					xtype: 'button',
					itemId: 'btnMostrar',
					text: 'Carregar',
					
					width: 80,
					margin: (0,0,0,5),
					handler: function(botao) {
						
						//debugger;
						var nomeAUX = botao.up('panel').queryById('vwNome');
						var idadeAUX = botao.up('panel').queryById('vwIdade');
						var nascAUX = botao.up('panel').queryById('vwNascimento');				 
						
						nomeAUX.setValue(Gnome);
						idadeAUX.setValue(Gidade);
						nascAUX.setValue(Gnasc);
						
					}
				}
			]
		},
		{
			xtype: 'panel',
			title: 'Alteração',
			items: [
				{
					xtype: 'textfield',
					itemId: 'upNome',
					fieldLabel: 'Nome:',
					labelAlign: 'right',
					labelWidth: 70,
					padding: 5
				},
				{
					xtype: 'datefield',
					itemId: 'upNascimento',
					fieldLabel: 'Nascimento:',
					labelAlign: 'right',
					labelWidth: 70,
					padding: 5,
					format: 'd/m/Y'
				},
				{
					xtype: 'numberfield',
					itemId: 'upIdade',
					fieldLabel: 'Idade:',
					labelAlign: 'right',
					labelWidth: 70,
					padding: 5,
					width: 150,
					maxValue: 99
				},
				{
					xtype: 'button',
					itemId: 'btnSalvar',
					text: 'Salvar',
					width: 80,
					margin: (0,0,0,5),
					handler: function(botao) {
						//debugger;
						let nome = botao.up('panel').queryById('upNome');
						let idade = botao.up('panel').queryById('upIdade');
						let nasc = botao.up('panel').queryById('upNascimento');
						let dados = `${nome.getValue()}\n${nasc.getValue()}\n${idade.getValue()}`; 

						Gnome = nome.getValue();
						Gidade = idade.getValue();
						Gnasc = nasc.getValue();
						
						nome.setValue(null);
						idade.setValue(null);
						nasc.setValue(null);

						if(Gnome != null && Gnasc != null && Gidade != null){

							Ext.MessageBox.alert('Sucesso','Cadastro efetuado!', function(botao){
								console.log(dados);
							});

						}else{
							
							Ext.MessageBox.alert({
								title: 'Atenção!',
								msg: 'Todos os campos são obrigatórios para cadastro.',
								icon: Ext.MessageBox.WARNING
							});

						}
						
					}
				},
				{
					xtype: 'button',
					itemId: 'btnMostrar',
					text: 'Carregar',
					
					width: 80,
					margin: (0,0,0,5),
					handler: function(botao) {
						
						//debugger;
						var nomeAUX = botao.up('panel').queryById('upNome');
						var idadeAUX = botao.up('panel').queryById('upIdade');
						var nascAUX = botao.up('panel').queryById('upNascimento');				 
						
						nomeAUX.setValue(Gnome);
						idadeAUX.setValue(Gidade);
						nascAUX.setValue(Gnasc);
						
					}
				}
			]
		}
	]
});

Ext.onReady(function(){
	
	Ext.create('Curso.Janela');
});	