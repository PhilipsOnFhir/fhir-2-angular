import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_ConceptMap_Contact } from './DSTU2_ConceptMap_Contact'
import { DSTU2_ConceptMap_Element } from './DSTU2_ConceptMap_Element'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_ConceptMap      extends DSTU2_DomainResource
{

   static def : string = 'ConceptMap';
   url : string ;
   identifier : DSTU2_Identifier ;
   version : string ;
   name : string ;
   status : string ;
   experimental : boolean ;
   publisher : string ;
   contact : DSTU2_ConceptMap_Contact [];
   date : string ;
   description : string ;
   useContext : DSTU2_CodeableConcept [];
   requirements : string ;
   copyright : string ;
   sourceUri : string ;
   sourceReference : DSTU2_Reference ;
   targetUri : string ;
   targetReference : DSTU2_Reference ;
   element : DSTU2_ConceptMap_Element [];
}
