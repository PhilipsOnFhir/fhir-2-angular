import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'
import { R5_SubstanceSpecification_Official } from './R5_SubstanceSpecification_Official'

export class R5_SubstanceSpecification_Name      extends R5_BackboneElement
{

   static def : string = 'SubstanceSpecification_Name';
   name : string ;
   type : R5_CodeableConcept ;
   status : R5_CodeableConcept ;
   preferred : boolean ;
   language : R5_CodeableConcept [];
   domain : R5_CodeableConcept [];
   jurisdiction : R5_CodeableConcept [];
   synonym : R5_SubstanceSpecification_Name [];
   translation : R5_SubstanceSpecification_Name [];
   official : R5_SubstanceSpecification_Official [];
   source : R5_Reference [];
}
