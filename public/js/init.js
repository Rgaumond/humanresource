let labels = {
  page_title: {
    en: "Employees",
    fr: "Employés",
  },
  title: {
    en: "Title",
    fr: "Titre",
  },
  department: {
    en: "Department",
    fr: "Département",
  },
  active: {
    en: "Active",
    fr: "Actif",
  },
  email: {
    en: "Email",
    fr: "Courriel",
  },
  mobile_phone: {
    en: "Mobile Phone",
    fr: "Cellulaire",
  },
  applications: {
    en: "Apps (comma-separated)",
    fr: "Apps (séparer par virgule)",
  },
};

$(document).ready(function () {

  
  $('input[name="active_check"]').change(function () {
    if ($(this).is(":checked")) {
      $('input[name="active"]').val("true");
    } else {
      $('input[name="active"]').val("false");
    }
  });
  $(".card.shadow-smr").hover(
    function () {
      // on mouseover
      $(this.parent).css({ background: "red" });
    },
    function () {
      // on mouseout
      $(this.parent).css({ "border-width": "", "border-color": "" });
    }
  );
});
