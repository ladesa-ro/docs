<script setup lang="ts">
const apiClient = useApiClient();

//

const cadastrarCurso = () => {
  const campusJipa = await apiClient.campi.campusFindById({
    id: "...",
  });

  const modalidadeTecnico = await apiClient.modalidades.modalidadeFindById({
    id: "...",
  });

  // #region snippet
  await apiClient.cursos.cursoCreate({
    requestBody: {
      campus: campusJipa,
      modalidade: modalidadeTecnico,
      nome: "Técnico em Computaria",
      nomeAbreviado: "tec-computaria",
    },
  });
  // #endregion snippet
};
</script>
