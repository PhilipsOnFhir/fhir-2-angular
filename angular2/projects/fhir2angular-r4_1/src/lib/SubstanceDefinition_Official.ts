import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class SubstanceDefinition_Official      extends BackboneElement
{

   static def : string = 'SubstanceDefinition_Official';
   authority : CodeableConcept ;
   status : CodeableConcept ;
   date : string ;
}
