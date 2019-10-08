import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'
import { SubstanceDefinition_Official } from './SubstanceDefinition_Official'

export class SubstanceDefinition_Name      extends BackboneElement
{

   static def : string = 'SubstanceDefinition_Name';
   name : string ;
   type : CodeableConcept ;
   status : CodeableConcept ;
   preferred : boolean ;
   language : CodeableConcept [];
   domain : CodeableConcept [];
   jurisdiction : CodeableConcept [];
   synonym : SubstanceDefinition_Name [];
   translation : SubstanceDefinition_Name [];
   official : SubstanceDefinition_Official [];
   source : Reference [];
}
