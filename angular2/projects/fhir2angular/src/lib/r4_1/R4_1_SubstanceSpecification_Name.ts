import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_SubstanceSpecification_Official } from './R4_1_SubstanceSpecification_Official'

export class R4_1_SubstanceSpecification_Name      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceSpecification_Name';
   name : string ;
   type : R4_1_CodeableConcept ;
   status : R4_1_CodeableConcept ;
   preferred : boolean ;
   language : R4_1_CodeableConcept [];
   domain : R4_1_CodeableConcept [];
   jurisdiction : R4_1_CodeableConcept [];
   synonym : R4_1_SubstanceSpecification_Name [];
   translation : R4_1_SubstanceSpecification_Name [];
   official : R4_1_SubstanceSpecification_Official [];
   source : R4_1_Reference [];
}
