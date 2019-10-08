import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'
import { R4_SubstanceSpecification_Official } from './R4_SubstanceSpecification_Official'

export class R4_SubstanceSpecification_Name      extends R4_BackboneElement
{

   static def : string = 'SubstanceSpecification_Name';
   name : string ;
   type : R4_CodeableConcept ;
   status : R4_CodeableConcept ;
   preferred : boolean ;
   language : R4_CodeableConcept [];
   domain : R4_CodeableConcept [];
   jurisdiction : R4_CodeableConcept [];
   synonym : R4_SubstanceSpecification_Name [];
   translation : R4_SubstanceSpecification_Name [];
   official : R4_SubstanceSpecification_Official [];
   source : R4_Reference [];
}
