// import { expect } from 'chai'
// import sinon from 'sinon'

// describe('Unity | create new Company', async () => {
//   let typeormClientPfRepository: TypeormClientPFRepository

//   let fakeSaveClientPfRepository: sinon.SinonStub // Quando eu pegava a tipagem pelo VSCode dava erro

//   before(() => {
//     typeormClientPfRepository = new TypeormClientPFRepository()

//     fakeSaveClientPfRepository = sinon.stub(typeormClientPfRepository, 'save')
//   })

//   it('Quando um cliente novo é salvo devo retornar seu ID', async () => {
//     const clientPfToSave: ClientPf = {
//       clientPfId: 'xxxxxxxxxxxxxxxxxxxx',
//       name: 'Lord Valdemort',
//       motherName: 'ValdeMãe Silva',
//       nationality: 'ENG',
//       cpf: '40969953801',
//       rg: '3233232',
//       gender: 'M',
//       maritalStatus: 'Solteiro',
//       birthState: 'SP',
//       birthDate: new Date(),
//       scholarity: 'ensino fundamental',
//       profession: 'Mestre das trevas',
//       address: 'Alameda Jau',
//       number: 687,
//       complement: 'apt 32',
//       cep: '01419-001',
//       neighborhood: 'Hogwarts',
//       city: 'São Paulo',
//       state: 'SP',
//       email: 'lordVoldemort@gmail.com',
//       telephone: '1211212121',
//       commercialPhone: '323232323',
//       cellphone: '323232323',
//       status: 'Ativo'
//     }

//     const creatClientPfUseCase = new CreateClientPfUseCase(
//       typeormClientPfRepository
//     )

//     fakeSaveClientPfRepository.resolves(
//       clientPfToSave
//     )

//     const result = await creatClientPfUseCase.execute(clientPfToSave)

//     expect(result).to.be.eql({ insertId: clientPfToSave.clientPfId })
//   })

//   it('Quando um cliente novo é salvo devo chamar o método save()', async () => {
//     const clientPfToSave: ClientPf = {
//       clientPfId: 'xxxxxxxxxxxxxxxxxxxx',
//       name: 'Lord Valdemort',
//       motherName: 'ValdeMãe Silva',
//       nationality: 'ENG',
//       cpf: '40969953801',
//       rg: '3233232',
//       gender: 'M',
//       maritalStatus: 'Solteiro',
//       birthState: 'SP',
//       birthDate: new Date(),
//       scholarity: 'ensino fundamental',
//       profession: 'Mestre das trevas',
//       address: 'Alameda Jau',
//       number: 687,
//       complement: 'apt 32',
//       cep: '01419-001',
//       neighborhood: 'Hogwarts',
//       city: 'São Paulo',
//       state: 'SP',
//       email: 'lordVoldemort@gmail.com',
//       telephone: '1211212121',
//       commercialPhone: '323232323',
//       cellphone: '323232323',
//       status: 'Ativo'
//     }

//     const creatClientPfUseCase = new CreateClientPfUseCase(
//       typeormClientPfRepository
//     )

//     fakeSaveClientPfRepository.resolves(
//       clientPfToSave
//     )

//     await creatClientPfUseCase.execute(clientPfToSave)

//     expect(fakeSaveClientPfRepository.called).to.be.true
//   })

//   after(() => {
//     fakeSaveClientPfRepository.restore()
//   })
// })
