import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DataElementStringencyEnum } from './R4_DataElementStringencyEnum'
import { R4_DataElement_Contact } from './R4_DataElement_Contact'
import { R4_DataElement_Mapping } from './R4_DataElement_Mapping'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ElementDefinition } from './R4_ElementDefinition'
import { R4_Identifier } from './R4_Identifier'

export class R4_DataElement      extends R4_DomainResource
{

   static def : string = 'DataElement';
   url : string ;
   identifier : R4_Identifier [];
   version : string ;
   name : string ;
   status : string ;
   experimental : boolean ;
   publisher : string ;
   contact : R4_DataElement_Contact [];
   date : string ;
   useContext : R4_CodeableConcept [];
   copyright : string ;
   stringency : R4_DataElementStringencyEnum ;
   mapping : R4_DataElement_Mapping [];
   element : R4_ElementDefinition [];
}
