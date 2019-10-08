import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_ValueSet_CodeSystem } from './DSTU2_ValueSet_CodeSystem'
import { DSTU2_ValueSet_Compose } from './DSTU2_ValueSet_Compose'
import { DSTU2_ValueSet_Contact } from './DSTU2_ValueSet_Contact'
import { DSTU2_ValueSet_Expansion } from './DSTU2_ValueSet_Expansion'

export class DSTU2_ValueSet      extends DSTU2_DomainResource
{

   static def : string = 'ValueSet';
   url : string ;
   identifier : DSTU2_Identifier ;
   version : string ;
   name : string ;
   status : string ;
   experimental : boolean ;
   publisher : string ;
   contact : DSTU2_ValueSet_Contact [];
   date : string ;
   lockedDate : string ;
   description : string ;
   useContext : DSTU2_CodeableConcept [];
   immutable : boolean ;
   requirements : string ;
   copyright : string ;
   extensible : boolean ;
   codeSystem : DSTU2_ValueSet_CodeSystem ;
   compose : DSTU2_ValueSet_Compose ;
   expansion : DSTU2_ValueSet_Expansion ;
}
