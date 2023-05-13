const Accordion = ({ title, children, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  const toggleAccordion = () => {
    setOpenIndex(isOpen ? -1 : index);
  }

  return (
    <div className="accordion-wrap">
      <div className={`accordion-header ${isOpen ? 'accordion-gold' : ''}`} onClick={toggleAccordion}>
        <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseOne2023-05-16" aria-expanded="false" aria-controls="collapseOne">{title}</button>
            </h2>
        </div>
        <i className={`fas fa-angle-down ${isOpen ? 'rotate-fa' : ''}`}></i>
      </div>
      {isOpen && <div className="accordion-text">{children}</div>}
    </div>
  );
}

export default Accordion;