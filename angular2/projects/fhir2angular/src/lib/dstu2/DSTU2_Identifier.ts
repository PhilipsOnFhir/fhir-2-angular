import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_IdentifierUseEnum } from './DSTU2_IdentifierUseEnum'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Identifier      extends DSTU2_Element
{

   static def : string = 'Identifier';
   use : DSTU2_IdentifierUseEnum ;
   type : DSTU2_CodeableConcept ;
   system : string ;
   value : string ;
   period : DSTU2_Period ;
   assigner : DSTU2_Reference ;
}
