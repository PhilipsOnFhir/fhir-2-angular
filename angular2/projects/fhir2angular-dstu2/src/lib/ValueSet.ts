import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { ValueSet_CodeSystem } from './ValueSet_CodeSystem'
import { ValueSet_Compose } from './ValueSet_Compose'
import { ValueSet_Contact } from './ValueSet_Contact'
import { ValueSet_Expansion } from './ValueSet_Expansion'

export class ValueSet      extends DomainResource
{

   static def : string = 'ValueSet';
   url : string ;
   identifier : Identifier ;
   version : string ;
   name : string ;
   status : string ;
   experimental : boolean ;
   publisher : string ;
   contact : ValueSet_Contact [];
   date : string ;
   lockedDate : string ;
   description : string ;
   useContext : CodeableConcept [];
   immutable : boolean ;
   requirements : string ;
   copyright : string ;
   extensible : boolean ;
   codeSystem : ValueSet_CodeSystem ;
   compose : ValueSet_Compose ;
   expansion : ValueSet_Expansion ;
}
