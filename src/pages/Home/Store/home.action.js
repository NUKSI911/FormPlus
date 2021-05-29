export const TemplateConfig = Object.freeze({
    InsertTemplateData:"[InsertTemplateData]"
})


export const insertTemplateData = (data) => {
    return {
        type:TemplateConfig.InsertTemplateData,
        payload:data
    }
}