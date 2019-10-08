import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'
import { STU3_Provenance_Agent } from './STU3_Provenance_Agent'
import { STU3_Provenance_Entity } from './STU3_Provenance_Entity'
import { STU3_Reference } from './STU3_Reference'
import { STU3_Signature } from './STU3_Signature'

export class STU3_Provenance      extends STU3_DomainResource
{

   static def : string = 'Provenance';
   target : STU3_Reference [];
   period : STU3_Period ;
   recorded : string ;
   policy : string [];
   location : STU3_Reference ;
   reason : STU3_Coding [];
   activity : STU3_Coding ;
   agent : STU3_Provenance_Agent [];
   entity : STU3_Provenance_Entity [];
   signature : STU3_Signature [];
}
