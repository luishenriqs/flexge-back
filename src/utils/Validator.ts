import { AppError } from './AppError'

/**
 * Função para validar parametros de requests
 * As chaves do expect e reviced caso sejam iguais não tera retorno caso contrario ira retornar um erro
 * @param {Object} Expect Array ou Objeto sera considerado apenas as chaves para validação
 * @param {Object} Recived Array ou Objeto sera considerado apenas as chaves para validação
 */
function Validator(expect: Object | Array<string>, recived: Object): void {
    const recived_keys = Object.keys(recived)
    const recived_values = Object.values(recived)
    const expect_keys = Array.isArray(expect) ? expect : Object.keys(expect)

    // REMOVE DA VERIFICAÇÃO ITENS NÃO OBRIGATÓRIOS
    let recived_keys_expected = recived_keys.filter((a) =>
        expect_keys.includes(a)
    )
    let recived_values_expected = recived_keys_expected.map((item) => {
        let idx = recived_keys_expected.indexOf(item)
        return recived_values[idx]
    })

    // VERIFICA SE ITEM NÃO FOI ENVIADO
    expect_keys.forEach((key) => {
        if (recived_keys_expected.indexOf(key) === -1) {
            throw new AppError(`Item ${key} is required for this request`)
        }
    })

    // VERIFICA SE ITEM ESTÁ VAZIO
    recived_values_expected.map((item) => {
        if (!item) {
            const idx = recived_values_expected.indexOf(item)
            throw new AppError(
                `This item ${recived_keys_expected[idx]} must be filled in with a valid value`
            )
        }
    })
}

export { Validator }
